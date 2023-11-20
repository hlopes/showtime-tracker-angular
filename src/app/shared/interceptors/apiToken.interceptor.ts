import { HttpHandlerFn, HttpRequest } from '@angular/common/http'
import { environment } from '@environments/environment'

export function apiTokenInterceptor(
  req: HttpRequest<unknown>,
  next: HttpHandlerFn,
) {
  const newReq = req.clone({
    headers: req.headers.set(
      'Authorization',
      `Bearer ${environment.apiReadToken}`,
    ),
  })

  return next(newReq)
}
