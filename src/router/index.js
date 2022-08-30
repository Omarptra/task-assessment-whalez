import { createRouter, createWebHistory } from 'vue-router'

import Assignment from '@/views/Assignment.vue'
import Webinar from '@/views/Webinar.vue'
import Video from '@/views/Video.vue'
import Podcast from '@/views/Podcast.vue'
import Files from '@/views/Files.vue'
import Certificate from '@/views/Certificate.vue'
import Course from '@/views/Course.vue'
import Pathways from '@/views/Pathways.vue'
import Vouchers from '@/views/Vouchers.vue'
import Quiz from '@/views/Quiz.vue'
import Category from '@/views/Category.vue'
import Dashboard from '@/views/Dashboard.vue'

const routes = [
  {
    path: '/',
    name: 'Dashboard',
    component: Dashboard
  },
  {
    path: '/assignment',
    name: 'Assignment',
    component: Assignment
  },
  {
    path: '/webinar',
    name: 'Webinar',
    component: Webinar
  },
  {
    path: '/video',
    name: 'Video',
    component: Video
  },
  {
    path: '/podcast',
    name: 'Podcast',
    component: Podcast
  },
  {
    path: '/files',
    name: 'Files',
    component: Files
  },
  {
    path: '/certificate',
    name: 'Certificate',
    component: Certificate
  },
  {
    path: '/course',
    name: 'Course',
    component: Course
  },
  {
    path: '/pathways',
    name: 'Pathways',
    component: Pathways
  },
  {
    path: '/vouchers',
    name: 'Vouchers',
    component: Vouchers
  },
  {
    path: '/quiz',
    name: 'Quiz',
    component: Quiz
  },
  {
    path: '/category',
    name: 'Category',
    component: Category
  },
  {
    path: '/competencies',
    name: 'Competencies',
    component: Pathways
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
