export function logExecutionTime(seconds: boolean = false) {
  return function (
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor
  ) {
    const originalMethod = descriptor.value;

    descriptor.value = function (...args: any[]) {
      let unidade = "ms";
      let divisor = 1;
      if (seconds) {
        unidade = "s";
        divisor = 1000;
      }

      console.log("------------------------");
      console.log(
        `Parametros passados para o método ${propertyKey}: ${JSON.stringify(
          args
        )}`
      );
      const t1 = performance.now();
      const resp = originalMethod.apply(this, args);
      const t2 = performance.now();
      console.log(
        `O retorno do método ${propertyKey} é ${JSON.stringify(resp)}`
      );
      console.log(
        `O método ${propertyKey} demorou ${(t2 - t1) / divisor} ${unidade}`
      );
      return resp;
    };

    return descriptor;
  };
}
