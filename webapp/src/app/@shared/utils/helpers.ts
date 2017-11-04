// Helpers

// Render element or component by provided condition
export function renderIf(condition, renderFn) {
  return condition ? renderFn() : null;
}

// GraphQL Query Builder
export function queryBuilder(options) {
  options.type = options.type ? options.type : 'query';
  options.operation = options.operation ? options.operation : '';
  options.fields = options.fields ? options.fields : [];
  options.data = options.data ? options.data : {};
  options.variables = options.variables ? options.variables : {};

  const query = {
      query: `
          ${ options.type } ${ queryDataArgumentAndTypeMap(options.data) } {
              ${ options.operation } ${ queryDataNameAndArgumentMap(options.data) } {
                  ${ options.fields.join(',') }
              }
          }`,
      variables: Object.assign(options.data, options.variables)
  };

  console.log(query);

  return query;
}

// Private - Convert object to name and argument map eg: (id: $id)
function queryDataNameAndArgumentMap(data) {
  // tslint:disable-next-line:max-line-length
  return Object.keys(data).length ? `(${ Object.keys(data).reduce((dataString, key, i) => `${ dataString }${ i !== 0 ? ', ' : '' }${ key }: $${ key }`, '' ) })` : '';
}

// Private - Convert object to argument and type map eg: ($id: Int)
function queryDataArgumentAndTypeMap(data) {
  // tslint:disable-next-line:max-line-length
  return Object.keys(data).length ? `(${ Object.keys(data).reduce((dataString, key, i) => `${ dataString }${ i !== 0 ? ', ' : '' }$${ key }: ${ queryDataType(data[key]) }`, '') })` : '';
}

// Private - Get GraphQL equivalent type of data passed (String, Int, Float, Boolean)
function queryDataType(data) {
  switch (typeof data) {
      case 'boolean':
          return 'Boolean';
      case 'number':
          return (data % 1 === 0) ? 'Int' : 'Float';
      case 'string':
      default:
          return 'String';
  }
}


const typeCache: { [label: string]: boolean } = {};

/**
 * This function coerces a string into a string literal type.
 * Using tagged union types in TypeScript 2.0, this enables
 * powerful typechecking of our reducers.
 *
 * Since every action label passes through this function it
 * is a good place to ensure all of our action labels are unique.
 *
 * @param label
 */
export function type<T>(label: T | ''): T {
  if (typeCache[<string>label]) {
    throw new Error(`Action type "${label}" is not unqiue"`);
  }

  typeCache[<string>label] = true;

  return <T>label;
}
