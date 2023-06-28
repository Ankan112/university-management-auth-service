import express from 'express';
import { UserRouters } from '../modules/users/user.route';
import { AcademicSemesterRoutes } from '../modules/academicSemester/academicSemester.route';

const router = express.Router();

const modulesRoutes = [
  {
    path: '/users',
    route: UserRouters,
  },
  {
    path: '/academic-semesters',
    route: AcademicSemesterRoutes,
  },
];

modulesRoutes.forEach(route => router.use(route.path, route.route));

// router.use('/users/', UserRouters);
// router.use('/academic-semesters', AcademicSemesterRoutes);

export default router;
