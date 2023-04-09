import { StackContext, Api, NextjsSite } from 'sst/constructs'

export function API({ stack }: StackContext) {
  const api = new Api(stack, 'api', {
    routes: {
      'GET /': 'packages/functions/src/lambda.handler',
    },
  })

  const site = new NextjsSite(stack, 'Site', {
    path: 'packages/web',
  })

  stack.addOutputs({
    ApiEndpoint: api.url,
  })
}
