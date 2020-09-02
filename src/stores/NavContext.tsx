// import React, { ReactNode, useContext } from 'react';

// interface IProviderProps<T> {
//   value: T;
//   children?: ReactNode;
// }

// interface ConsumerProps<T> {
//   children: (value: T) => ReactNode;
// }

// const NavContext = React.createContext(undefined);

// const NavCotextProvider = (props: IProviderProps) => {
//   const { children } = props;
//   const disableLink = (event: React.SyntheticEvent<EventTarget>) => {
//     event.preventDefault();
//   };
//   return <NavContext.Provider value={}>{children}</NavContext.Provider>;
// };

// export const useDisableLink = () => {
//   const {} = useContext(NavContext);
//   return;
// };

// export default NavCotextProvider;
import React from 'react';

const NavContext = () => {
  return <div></div>;
};

export default NavContext;
