import express, { Application, NextFunction, Request, Response } from 'express';
import cors from 'cors';
import globalErrorHandler from './app/modules/users/middlewares/globalErrorHandler';
import routes from './app/routes';
import httpStatus from 'http-status';
import {
  generatedFacultyId,
  generatedStudentId,
} from './app/modules/users/user.utiles';
const app: Application = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// application route
console.log(app.get('env'));
app.use('/api/v1', routes);
// app.use('/api/v1/users/', UserRouters);
// app.use('/api/v1/academic-semesters', AcademicSemesterRoutes);

//testing
// app.get('/', (req: Request, res: Response) => {
//   // next('Ore baba error hoiche ki korbo')
//   // res.send('Hello World!')
//   // Promise.reject(new Error('Unhandled promise rejection'))
//   // console.log(x)
// })

// global error handler
app.use(globalErrorHandler);

// handle not found

app.use((req: Request, res: Response, next: NextFunction) => {
  res.status(httpStatus.NOT_FOUND).json({
    success: false,
    message: 'Not Found',
    errorMessage: [
      {
        path: req.originalUrl,
        message: 'API Not Found',
      },
    ],
  });
  next();
});

// const academicSemester = {
//   code: '01',
//   year: '2025',
// };
// const testId = async () => {
//   const testIds = await generatedFacultyId();
//   console.log(testIds);
// };
// testId();
export default app;
