type RequestMethod = 'GET' | 'POST' | 'PATCH' | 'PUT' | 'DELETE';

export const request = async <T, TData = unknown>(
  url: string,
  method: RequestMethod = 'GET',
  data?: TData,
): Promise<T> => {
  const options: RequestInit = { method };

  if (data) {
    options.body = JSON.stringify(data);
    options.headers = {
      'Content-Type': 'application/json; charset=UTF-8',
    };
  }

  const response = await fetch(url, options);

  if (!response.ok) {
    throw new Error(`HTTP ${response.status}: ${response.statusText}`);
  }

  return response.json();
};
