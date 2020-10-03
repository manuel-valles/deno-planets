import { join } from "https://deno.land/std/path/mod.ts";

const readFile = async (folder: string, fileName: string): Promise<void> => {
    const path = join(folder, fileName)
    const data: string = await Deno.readTextFile(path);
    console.log(data);
}

await readFile('.', 'hello.txt')
await readFile('text_files', 'hello.txt')