import { HttpHeaders, HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';


export const requestInterceptor: HttpInterceptorFn = (req, next) => {
  const modifiedReq = req.clone({
    url: getUrl(req.url),
    headers: getHeaders(req.url),
    withCredentials: true
  });

  return next(modifiedReq);
};

const getUrl = (url: string): string => {
  const hostname = window.location.hostname;
  return `http://${hostname}:2003/api/` + url;
}

const getHeaders = (url: string): HttpHeaders => {
  const cookieService = inject(CookieService);
  const jwtToken = cookieService.get('jwt-token');

  return url.includes('auth') || jwtToken === ''
    ? new HttpHeaders()
    : new HttpHeaders({ 'Authorization': `Bearer ${jwtToken}` });
};
