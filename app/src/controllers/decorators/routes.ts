import 'reflect-metadata';
import { Methods } from './Methods';
import { MetadataKeys } from './MetadataKeys';

function routeBinder(method: string) {
  return function get(path: string) {
    return function (target: any, key: string, desc: PropertyDescriptor) {
      Reflect.defineMetadata(MetadataKeys.path, path, target, key);
      Reflect.defineMetadata(MetadataKeys.method, method, target, key);
    };
  };
}

export const get = routeBinder(Methods.get); /*return decorator factory */
export const put = routeBinder(Methods.put); /*return decorator factory */
export const post = routeBinder(Methods.post); /*return decorator factory */
export const del = routeBinder(Methods.del); /*return decorator factory */
export const patch = routeBinder(Methods.patch); /*return decorator factory */
