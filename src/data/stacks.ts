import {Stack} from '@/models';

const stacks: Stack[] = [
  {
    id: 'go',
    name: 'Go',
    repos: [
      'casbin/casbin',
      'open-policy-agent/opa',
      'ory/ladon',
    ],
    predefined: true,
  },
  {
    id: 'java',
    name: 'Java',
    repos: [
      'casbin/jcasbin',
      'apache/shiro',
      'spring-projects/spring-security',
      'pac4j/pac4j',
    ],
    predefined: true,
  },
  {
    id: 'nodejs',
    name: 'Node.js',
    repos: [
      'casbin/node-casbin',
      'onury/accesscontrol',
      'seeden/rbac',
      'phellipeandrade/rbac',
    ],
    predefined: true,
  },
  {
    id: 'php',
    name: 'PHP',
    repos: [
      'php-casbin/php-casbin',
      'OWASP/rbac',
      'santigarcor/laratrust',
      'mdmsoft/yii2-admin',
      'CakeDC/users',
      'seeden/rbac',
    ],
    predefined: true,
  },
  {
    id: 'python',
    name: 'Python',
    repos: [
      'casbin/pycasbin',
      'YosaiProject/yosai',
      'tonyseek/simple-rbac',
      'offapi/rbac-23andme-oauth2',
      'shonenada/flask-rbac',
    ],
    predefined: true,
  },
  {
    id: 'dotnet',
    name: '.NET',
    repos: [
      'casbin/Casbin.NET',
      'anycmd/anycmd',
      'easy-rbac-team/easyRBAC',
    ],
    predefined: true,
  },
];

export default stacks;
