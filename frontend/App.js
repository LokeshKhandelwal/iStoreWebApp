import Main from "./Main"
import { Provider } from "react-redux"
import { store } from "./redux/store";
import { StripeProvider } from "@stripe/stripe-react-native"

const stripekey = "pk_test_51MfTUUSGFXLHJ0DSwpCqy5TMmRbi8W5ZxRAxcEzc87SESplMNle5qT9TKsW0UyiGxYy6Y6ph5tE1xWnxptp9WGlG00ka17EvhZ";

export default function App() {
  return (
    <StripeProvider
      threeDSecureParams={{
        backgroundColor: "#fff",
        timeout: 5
      }}
      merchantIdentifier="iStore-app.com"
      publishableKey={stripekey}
    >
      <Provider store={store}>
        <Main />
      </Provider>
    </StripeProvider>
  );
}

