let config: any = {};

export const setConfig = (key: string, value: any) => {
  config = {
    ...config,
    [key]: value,
  };
};

export const getConfig = () => config;

export const getValueFromConfig = (key: string) => config[key];
