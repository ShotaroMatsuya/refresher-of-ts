import 'reflect-metadata';

function routeBinder(method: string) {
  return function get(path: string) {
    return function (target: any, key: string, desc: PropertyDescriptor) {
      Reflect.defineMetadata('path', path, target, key);
      Reflect.defineMetadata('method', method, target, key);
    };
  };
}

export const get = routeBinder('get'); /*return decorator factory */
export const put = routeBinder('put'); /*return decorator factory */
export const post = routeBinder('post'); /*return decorator factory */
export const del = routeBinder('del'); /*return decorator factory */
export const patch = routeBinder('patch'); /*return decorator factory */
