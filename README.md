# Angular Pipes

Angular is a development platform for building mobile and desktop web applications using TypeScript/JavaScript and other languages.
Here we have some custom pipes to meet projects and save implementation time.

## Custom Date Pipe Quickstart
Have the same usage of https://angular.io/api/common/DatePipe

> {{ dateObj | customDate }}               // output is 'Jun 15, 2015' <br />
> {{ dateObj | customDate:'medium' }}      // output is 'Jun 15, 2015, 9:43:11 PM' <br />
> {{ dateObj | customDate:'shortTime' }}   // output is '9:43 PM' <br />
> {{ dateObj | customDate:'mm:ss' }}       // output is '43:11' <br />

The implementation was necessary due to: <br />
The page does not render correctly on iOS. <br />
https://github.com/angular/angular/issues/20443


Errors on console: <br />
> main-es2015.acfdaad….js:2 <br />
> ERROR Error: InvalidPipeArgument: 'Unable to convert "2018-10-03 23:51:47" into a date' for pipe 'ys'Ll @ main-es2015.acfdaad….js:2handleError <br /> 
> @ main-es2015.acfdaad….js:2run <br /> 
> @ polyfills-es2015.3f36a01….js:2tick <br />
> @ main-es2015.acfdaad….js:2(anonymous function) <br />
> @ main-es2015.acfdaad….js:2onInvoke <br />
> @ main-es2015.acfdaad….js:2run <br />
> @ polyfills-es2015.3f36a01….js:2next @ main-es2015.acfdaad….js:2(anonymous function) 
> ...

It's a very silly solution but it works for now, feel free to use and improve.
