// service
export class MyService {
  constructor(private http: HttpClient) {}

  getData() {
    return this.http.get(url);
  }
}

// component
this.myService.getData().subscribe(data => console.log(data));

// service
export class MyService {
  constructor(private http: HttpClient) {}

  getData() {
    return this.http.get(url, { observe: "response" });
  }
}

// service
export class MyService {
  constructor(private http: HttpClient) {}

  getCountries(): Obervable<any> {
    return this.checkToken().pipe(
      mergeMap(() => {
        const url = `${
          this.restUrl
        }query/Country?where=id>0&fields=id,code,name&count=300&BhRestToken=${
          this.BhRestToken
        }`;
        return this.http.get(url);
      })
    );
  }
}

const fields = ["id", "name", "code"];

const params = new HttpParams()
  .set("where", "id>0")
  .set("fields", fields.join(","))
  .set("count", "300")
  .set("BhRestToken", this.BhRestToken);

const httpOptions = {
  params
};

const url = `${this.restUrl}query/Country`;

return this.httpClient.get(url, httpOptions);

@Injectable()
export class NoopInterceptor implements HttpInterceptor {
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    // do something with request
    return next.handle(req);
  }

  // interceptor
  intercept(req: HttpRequest<any>, next: HttpHandler) {
    return this.authService.checkToken().pipe(
      mergeMap(() => {
        const token = this.authService.BhRestToken;
        const params = req.params.set("BhRestToken", token);
        const authReq = req.clone({
          params: params
        });

        return next.handle(authReq);
      })
    );
  }

  // interceptor
  intercept(req: HttpRequest<any>, next: HttpHandler) {
    // check token and update the request...
    return next.handle(authReq).do(null, (error: any) => {
      if (error instanceof HttpErrorResponse) {
        if (error.status === 401) {
          this.authService.handleRetry();
        }
      }
    });
  }
}

// service
export class MyService {
  constructor(private http: HttpClient) {}

  // service
  getCountries(): Obervable<any> {
    const fields = ["id", "name", "code"];

    const params = new HttpParams()
      .set("where", "id>0")
      .set("fields", fields.join(","))
      .set("count", "300");

    const httpOptions = {
      params
    };

    const url = `${this.restUrl}query/Country`;

    return this.httpClient.get(url, httpOptions);
  }
}
