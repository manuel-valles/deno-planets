const readFile = async (path: string): Promise<void> => {
    const data: string = await Deno.readTextFile(path);
    console.log(data);
}

readFile('./hello.txt')