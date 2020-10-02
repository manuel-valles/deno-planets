import { join } from "https://deno.land/std/path/mod.ts";
import { BufReader } from 'https://deno.land/std/io/mod.ts';
import { parse } from 'https://deno.land/std/encoding/csv.ts';

const loadPlanetsData = async (): Promise<void> => {
    const path: string = join('csv_files', 'cumulative_2020.10.02_10.54.49.csv')

    const file: Deno.File = await Deno.open(path)
    const bufReader: BufReader = new BufReader(file)
    const result: unknown[] = await parse(bufReader, {
        skipFirstRow: true,
        comment: '#'
    })

    Deno.close(file.rid)

    console.log(result)
}

await loadPlanetsData()