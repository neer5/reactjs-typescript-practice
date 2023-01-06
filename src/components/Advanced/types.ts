
export type CounterState = {
    count: number;  
};

export type WithCounterHocProps = {
    name: string;
    count?: number;
    incrementCount?: () => void;
  }

export type PureCompState = {
    name: string;
}
export type PureCompProps = {
    name: string;
  }