import { request } from 'umi';

export async function queryHello(): Promise<any> {
  return request('/api/hello');
}
