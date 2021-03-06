import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import baseKnowledge from './modules/base-knowledge';
import application from './modules/application';
import { lazyLoadHelper } from '@/utils';
import { beforeEachCallback, beforeResolveCallback, afterEachCallback } from '@/router/router-guards';

Vue.use(VueRouter);

const routes: RouteConfig[] = [
  {
    path: '/',
    name: 'home',
    component: lazyLoadHelper('home/index'),
    meta: {
      title: 'Vue Learning Demos'
    }
  },
  ...baseKnowledge,
  ...application,
  {
    path: '*',
    name: 'NotFound',
    component: lazyLoadHelper('common/not-found'),
    meta: {
      title: 'Not Found'
    }
  }
];

const router = new VueRouter({ routes });

// 全局前置导航
router.beforeEach(beforeEachCallback);

// 全局解析前置
router.beforeResolve(beforeResolveCallback);

// 全局后置
router.beforeResolve(afterEachCallback);

export default router;
