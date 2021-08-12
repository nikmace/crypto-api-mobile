export type ServiceProvider = {
  provide: { new (...args: any): any }
  useClass: ServiceProvider["provide"]
}
