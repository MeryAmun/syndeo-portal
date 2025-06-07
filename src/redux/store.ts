import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./auth/authSlice"
import constantReducer from     "./constants/constantslice"
import messageReducer from "./messageSlice"
import loadingReducer from "./loadingSlice"

const reducers = {
  auth:authReducer,
  constants:constantReducer,
  message:messageReducer,
  loading:loadingReducer
};

const defaultMiddlewareConfig = {
  serializableCheck: {
    ignoredActions: [
      "inputChange/handleCheckboxInputChange",
      "inputChange/handleFunderInputChange",
      "inputChange/handleProposalInputChange",
      "inputChange/handleFileChange",
      "inputChange/handleProposalFileChange",
      "inputChange/handleFilesChange",
      "inputChange.proposalFormData.ownerThumbnail",
      "inputChange/saveFundingRequest",
      "pageChange/nextPage",
      "fundersForm/handleInputChange",
    ],
    // Ignore these field paths in all actions
    ignoredActionPaths: ["meta.arg", "payload.timestamp"],
    // Ignore these paths in the state
    ignoredPaths: ["items.dates"],
  },
};
export const store = configureStore({
  reducer: reducers,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware(defaultMiddlewareConfig),

  // enhancers: getDefaultEnhancers => {

  // },
  devTools: true,
});
