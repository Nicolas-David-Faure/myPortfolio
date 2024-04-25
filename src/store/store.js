import { configureStore } from "@reduxjs/toolkit";
import { languages } from "./slice/appBook/languages";
import { screenSlice } from "./slice/screen/screenSlice";
import { activityBarSlice } from "./slice/activityBar/activityBarSlice";
import { projectsSlice } from "./slice/projects/projectsSlice";
export const store = configureStore({
    reducer: {
        languages: languages.reducer,
        screenSlice: screenSlice.reducer,
        activityBarSlice: activityBarSlice.reducer,
        projectsSlice: projectsSlice.reducer,
    },
  })
