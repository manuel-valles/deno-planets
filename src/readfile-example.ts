import { join } from "https://deno.land/std/path/mod.ts";

const readFile = async (fileName: string, folder?: string): Promise<void> => {
    const path = folder ? join(folder, fileName) : fileName
    const data: string = await Deno.readTextFile(path);
    console.log(data);
}

await readFile('hello.txt')
await readFile('hello.txt', 'text_files')