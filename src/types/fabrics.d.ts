// фабрика для приведения произвольных пропсов к типу пропсов для syled-components
// с префиксом $ они не проваливаются дальше в DOM ноды
declare type StyledProps<TProps> = {
  [Key in keyof TProps as Key extends string ? `$${Key}` : never]: TProps[Key];
};
