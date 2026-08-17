import React from 'react';

export interface StackProps extends React.HTMLAttributes<HTMLDivElement> {
  gap?: number | string;
  direction?: 'row' | 'column';
  align?: 'flex-start' | 'center' | 'flex-end' | 'stretch';
  justify?: 'flex-start' | 'center' | 'flex-end' | 'space-between';
  wrap?: boolean;
}

export const Stack: React.FC<StackProps> = ({
  gap = 8,
  direction = 'column',
  align = 'stretch',
  justify = 'flex-start',
  wrap = false,
  children,
  style,
  ...props
}) => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: direction,
        gap,
        alignItems: align,
        justifyContent: justify,
        flexWrap: wrap ? 'wrap' : 'nowrap',
        ...style,
      }}
      {...props}
    >
      {children}
    </div>
  );
};

export const HStack: React.FC<Omit<StackProps, 'direction'>> = (props) => (
  <Stack direction="row" align="center" {...props} />
);

export const VStack: React.FC<Omit<StackProps, 'direction'>> = (props) => (
  <Stack direction="column" {...props} />
);

export interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

export const Container: React.FC<ContainerProps> = ({
  size = 'lg',
  children,
  style,
  ...props
}) => {
  const maxW = size === 'sm' ? 640 : size === 'md' ? 768 : size === 'lg' ? 1024 : 1280;

  return (
    <div
      style={{
        width: '100%',
        maxWidth: maxW,
        margin: '0 auto',
        padding: '0 20px',
        ...style,
      }}
      {...props}
    >
      {children}
    </div>
  );
};
