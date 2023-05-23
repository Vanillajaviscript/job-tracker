
const AppContext = React.createContext();

const AppProvider = ({children}) => {
  const [state, setState] = useState(initialState);
  return (
    <AppContext.Provider
      value={{
        ...state
      }}
    >
      {children}
    </AppContext.Provider>
  )
};

export { AppProvider }