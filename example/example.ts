/*
 * Copyright 2021 the original author or authors.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import * as Bindings from '../'

import {Pool} from 'pg'

// @ts-ignore
async function main() {
    let b = await Bindings.fromServiceBindingRoot()
    b = await Bindings.filter(b, 'postgresql')
    if (b.length != 1) {
        throw Error(`Incorrect number of PostgreSQL bindings: ${b.length}`)
    }

    const u = await Bindings.get(b[0], 'url')
    if (u == undefined) {
        throw Error('No URL in binding')
    }

    // @ts-ignore
    const conn = new Pool({connectionString: u})

    // ...
}
