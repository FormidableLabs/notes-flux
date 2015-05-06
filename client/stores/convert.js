/**
 * Stores: Convert
 */
import alt from "../alt";
import ConvertActions from "../actions/convert";

import types from "../utils/types";

class ConvertStore {
  constructor() {
    // Auto-magically bind to methods with `onACTION` or `ACTION`.
    // See: http://alt.js.org/docs/createStore/#storemodelbindactions
    this.bindActions(ConvertActions);

    // TODO: Switch to immutable-js + alt integration.
    this.conversions = [];
    this.types = types.DEFAULT_TYPE;
    this.value = "";
  }

  onFetchConversions(/*conversions*/) {
    // TODO: IMPLEMENT
    // TODO: Add error state and UI + test out.
    this.conversions = this.types.split(",").map(type => ({
      title: type,
      content: "TODO " + this.value
    }));
  }

  onSetConversionTypes(conversionTypes) {
    this.types = conversionTypes;
  }

  onSetConversionValue(value) {
    this.value = value;
  }
}

export default alt.createStore(ConvertStore);
