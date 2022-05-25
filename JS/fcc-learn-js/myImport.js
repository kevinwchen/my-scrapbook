// Import from a file
import { capitaliseString } from "./myExport";
const cap = capitaliseString("nana!")
console.log(cap);

// Import everything from a file
import * as capitaliseStrings from "./myExport";

// Import a default export (no need for curly braces)
import subtract from "./myExport";