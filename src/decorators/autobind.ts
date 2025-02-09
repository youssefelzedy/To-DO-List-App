export function autobind(_: any, _2: string, descriptor: PropertyDescriptor) {
  const originalMethood = descriptor.value;
  const adjDescriptor: PropertyDescriptor = {
    configurable: true,
    get() {
      const boundFn = originalMethood.bind(this);
      return boundFn;
    },
  };
  return adjDescriptor;
}
