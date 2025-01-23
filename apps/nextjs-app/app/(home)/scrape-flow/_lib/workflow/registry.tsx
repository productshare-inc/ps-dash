import { TaskParamType, TaskType } from "@repo/ts-types/scrape-flow/node";
import { WorkflowTask } from "@repo/ts-types/scrape-flow/workflow";
import { ExtractTextFromElementTask, LaunchBrowserTask, PageToHtmlTask } from "./tasks";

type Registry = {
    [K in TaskType]: WorkflowTask & {type: K}
}

export const TaskRegistry:Registry = {
    LAUNCH_BROWSER: LaunchBrowserTask,
    PAGE_TO_HTML: PageToHtmlTask,
    EXTRACT_TEXT_FROM_ELEMENT: ExtractTextFromElementTask
}

export const ColorForHandle: Record<TaskParamType,string> = {
    BROWSER_INSTANCE:  "!bg-sky-400",
    STRING: "!bg-amber-400"
}