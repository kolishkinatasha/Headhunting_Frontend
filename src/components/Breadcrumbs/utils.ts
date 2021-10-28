import { RoutsType } from 'components/routes/routes';

export const routeFilter = (arrRoutes: RoutsType[], path: string) => {
  const currentPath = path === '/' ? path : path.slice(0, -1);
  const currentRoute = arrRoutes.find(
    (el: RoutsType) => el.path === currentPath,
  );
  return currentRoute;
};

export const spliterPaths = (fullPath: string) => {
  let splitPathArr = [''];
  if (fullPath !== '/') {
    splitPathArr = fullPath.split('/');
  }
  return splitPathArr;
};

export const fullPathCreater = (path: string, el: string) => `${path + el}/`;
