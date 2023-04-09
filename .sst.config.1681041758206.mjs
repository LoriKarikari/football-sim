import { createRequire as topLevelCreateRequire } from 'module';const require = topLevelCreateRequire(import.meta.url);
var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });

// stacks/MyStack.ts
import { Api } from "sst/constructs";
function API({ stack }) {
  const api = new Api(stack, "api", {
    routes: {
      "GET /": "packages/functions/src/lambda.handler"
    }
  });
  stack.addOutputs({
    ApiEndpoint: api.url
  });
}
__name(API, "API");

// sst.config.ts
var sst_config_default = {
  config(_input) {
    return {
      name: "football-sim",
      region: "us-east-1"
    };
  },
  stacks(app) {
    app.stack(API);
  }
};
export {
  sst_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3RhY2tzL015U3RhY2sudHMiLCAic3N0LmNvbmZpZy50cyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiaW1wb3J0IHsgU3RhY2tDb250ZXh0LCBBcGkgfSBmcm9tIFwic3N0L2NvbnN0cnVjdHNcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIEFQSSh7IHN0YWNrIH06IFN0YWNrQ29udGV4dCkge1xuICBjb25zdCBhcGkgPSBuZXcgQXBpKHN0YWNrLCBcImFwaVwiLCB7XG4gICAgcm91dGVzOiB7XG4gICAgICBcIkdFVCAvXCI6IFwicGFja2FnZXMvZnVuY3Rpb25zL3NyYy9sYW1iZGEuaGFuZGxlclwiLFxuICAgIH0sXG4gIH0pO1xuICBzdGFjay5hZGRPdXRwdXRzKHtcbiAgICBBcGlFbmRwb2ludDogYXBpLnVybCxcbiAgfSk7XG59XG4iLCAiaW1wb3J0IHsgU1NUQ29uZmlnIH0gZnJvbSBcInNzdFwiO1xuaW1wb3J0IHsgQVBJIH0gZnJvbSBcIi4vc3RhY2tzL015U3RhY2tcIjtcblxuZXhwb3J0IGRlZmF1bHQge1xuICBjb25maWcoX2lucHV0KSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG5hbWU6IFwiZm9vdGJhbGwtc2ltXCIsXG4gICAgICByZWdpb246IFwidXMtZWFzdC0xXCIsXG4gICAgfTtcbiAgfSxcbiAgc3RhY2tzKGFwcCkge1xuICAgIGFwcC5zdGFjayhBUEkpO1xuICB9XG59IHNhdGlzZmllcyBTU1RDb25maWc7XG4iXSwKICAibWFwcGluZ3MiOiAiOzs7OztBQUFBLFNBQXVCLFdBQVc7QUFFM0IsU0FBUyxJQUFJLEVBQUUsTUFBTSxHQUFpQjtBQUMzQyxRQUFNLE1BQU0sSUFBSSxJQUFJLE9BQU8sT0FBTztBQUFBLElBQ2hDLFFBQVE7QUFBQSxNQUNOLFNBQVM7QUFBQSxJQUNYO0FBQUEsRUFDRixDQUFDO0FBQ0QsUUFBTSxXQUFXO0FBQUEsSUFDZixhQUFhLElBQUk7QUFBQSxFQUNuQixDQUFDO0FBQ0g7QUFUZ0I7OztBQ0NoQixJQUFPLHFCQUFRO0FBQUEsRUFDYixPQUFPLFFBQVE7QUFDYixXQUFPO0FBQUEsTUFDTCxNQUFNO0FBQUEsTUFDTixRQUFRO0FBQUEsSUFDVjtBQUFBLEVBQ0Y7QUFBQSxFQUNBLE9BQU8sS0FBSztBQUNWLFFBQUksTUFBTSxHQUFHO0FBQUEsRUFDZjtBQUNGOyIsCiAgIm5hbWVzIjogW10KfQo=
