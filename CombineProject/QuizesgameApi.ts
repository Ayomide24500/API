import * as http from 'http';
import * as url from 'url';

interface Question {
  text: string;
}

interface Quiz {
  id: number;
  title: string;
  questions: Question[];
}

let quizzes: Quiz[] = [
  {
    id: 1,
    title: "General Knowledge",
    questions: [{
         text: "Who is the president of Nigeria"
    }]
  },
  {
    id: 2,
    title: "History",
    questions: [{
         text: "In which year did World War II end?"
    }]
  },
  {
    id: 3,
    title: "History",
    questions: [{
         text: "In which year did World War II end?"
    }]
  }
];

const server = http.createServer((req, res) => {
  const parsedUrl = url.parse(req.url || '', true);

  if (req.method === 'GET') {
    if (parsedUrl.pathname === '/quizzes') {
    
      res.setHeader('Content-Type', 'application/json');
      res.end(JSON.stringify(quizzes));
    } else if (parsedUrl.pathname === '/quizzes/:id') {

      const id = parseInt(parsedUrl.query.id as string, 10);
      const quiz = quizzes.find(q => q.id === id);
      if (quiz) {
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify(quiz));
      } else {
        res.statusCode = 404;
        res.end(JSON.stringify({ message: 'Quiz not found' }));
      }
    }
  }

  if (req.method === 'POST') {
    if (parsedUrl.pathname === '/quizzes') {
      // Create a new quiz
      let body = '';
      req.on('data', chunk => {
        body += chunk.toString();
      });
      req.on('end', () => {
        const { title, questions } = JSON.parse(body);
        const id = quizzes.length
        const newQuiz: Quiz = { id, title, questions };
        quizzes.push(newQuiz);
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify(newQuiz));
      });
    }
  }

  if (req.method === 'PUT') {
    if (parsedUrl.pathname === '/quizzes/:id') {
      // Update a quiz
      const id = parseInt(parsedUrl.query.id as string, 10);
      let body = '';
      req.on('data', chunk => {
        body += chunk.toString();
      });
      req.on('end', () => {
        const { title, questions } = JSON.parse(body);
        const quizIndex = quizzes.findIndex(q => q.id === id);
        if (quizIndex !== -1) {
          quizzes[quizIndex].title = title || quizzes[quizIndex].title;
          quizzes[quizIndex].questions = questions || quizzes[quizIndex].questions;
          res.setHeader('Content-Type', 'application/json');
          res.end(JSON.stringify(quizzes[quizIndex]));
        } else {
          res.statusCode = 404;
          res.end(JSON.stringify({ message: 'Quiz not found' }));
        }
      });
    }
  }

  if (req.method === 'DELETE') {
    if (parsedUrl.pathname === '/quizzes/:id') {
      // Delete a quiz
      const id = parseInt(parsedUrl.query.id as string, 10);
      const quizIndex = quizzes.findIndex(q => q.id === id);
      if (quizIndex !== -1) {
        const deletedQuiz = quizzes.splice(quizIndex, 1)[0];
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify({ message: 'Quiz deleted successfully', deletedQuiz }));
      } else {
        res.statusCode = 404;
        res.end(JSON.stringify({ message: 'Quiz not found' }));
      }
    }
  }
});

const PORT = 7000;
server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
// req
// .on("data", (chunk) => {
//   Holder += chunk.toString();
// })
// req.on("end", () => {
//   const {title, id} = JSON.parse(Holder)
//   const quizindex = quizzes.findIndex((el) => {
//     el.id === id
//     if(quizindex !== -1){
//       quizzes[quizindex].title = title || quizzes[quizindex].title;
//       quizzes[quizindex].questions || quizzes[quizindex].questions;
//     }else{
//       response.message = "update succesfully"
//       res.statusCode = 404;
//       res.end(JSON.stringify({response, status}));
//     }
//   })
// })