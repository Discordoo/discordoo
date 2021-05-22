[discordoo](../README.md) / [Modules](../modules.md) / [collection](../modules/collection.md) / Collection

# Class: Collection<K, V\>

[collection](../modules/collection.md).Collection

An utility data structure used within the library

## Type parameters

| Name |
| :------ |
| `K` |
| `V` |

## Hierarchy

- *Map*<K, V\>

  ↳ **Collection**

## Table of contents

### Constructors

- [constructor](collection.collection-1.md#constructor)

### Properties

- [[Symbol.species]](collection.collection-1.md#[symbol.species])
- [[Symbol.toStringTag]](collection.collection-1.md#[symbol.tostringtag])
- [size](collection.collection-1.md#size)

### Methods

- [[Symbol.iterator]](collection.collection-1.md#[symbol.iterator])
- [clear](collection.collection-1.md#clear)
- [clone](collection.collection-1.md#clone)
- [delete](collection.collection-1.md#delete)
- [entries](collection.collection-1.md#entries)
- [equal](collection.collection-1.md#equal)
- [filter](collection.collection-1.md#filter)
- [forEach](collection.collection-1.md#foreach)
- [get](collection.collection-1.md#get)
- [has](collection.collection-1.md#has)
- [keys](collection.collection-1.md#keys)
- [random](collection.collection-1.md#random)
- [set](collection.collection-1.md#set)
- [values](collection.collection-1.md#values)

## Constructors

### constructor

\+ **new Collection**<K, V\>(`entries?`: ``null`` \| readonly readonly [K, V][]): [*Collection*](collection.collection-1.md)<K, V\>

#### Type parameters

| Name |
| :------ |
| `K` |
| `V` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `entries?` | ``null`` \| readonly readonly [K, V][] |

**Returns:** [*Collection*](collection.collection-1.md)<K, V\>

Inherited from: Map<K, V\>.constructor

Defined in: node_modules/typescript/lib/lib.es2015.collection.d.ts:32

\+ **new Collection**<K, V\>(`iterable`: *Iterable*<readonly [K, V]\>): [*Collection*](collection.collection-1.md)<K, V\>

#### Type parameters

| Name |
| :------ |
| `K` |
| `V` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `iterable` | *Iterable*<readonly [K, V]\> |

**Returns:** [*Collection*](collection.collection-1.md)<K, V\>

Inherited from: Map<K, V\>.constructor

Defined in: node_modules/typescript/lib/lib.es2015.iterable.d.ts:159

## Properties

### [Symbol.species]

• `Readonly` **[Symbol.species]**: MapConstructor

Defined in: node_modules/typescript/lib/lib.es2015.symbol.wellknown.d.ts:317

___

### [Symbol.toStringTag]

• `Readonly` **[Symbol.toStringTag]**: *string*

Inherited from: Map.\_\_@toStringTag

Defined in: node_modules/typescript/lib/lib.es2015.symbol.wellknown.d.ts:135

___

### size

• `Readonly` **size**: *number*

Inherited from: Map.size

Defined in: node_modules/typescript/lib/lib.es2015.collection.d.ts:28

## Methods

### [Symbol.iterator]

▸ **[Symbol.iterator]**(): *IterableIterator*<[K, V]\>

Returns an iterable of entries in the map.

**Returns:** *IterableIterator*<[K, V]\>

Inherited from: Map.\_\_@iterator

Defined in: node_modules/typescript/lib/lib.es2015.iterable.d.ts:121

___

### clear

▸ **clear**(): *void*

**Returns:** *void*

Inherited from: Map.clear

Defined in: node_modules/typescript/lib/lib.es2015.collection.d.ts:22

___

### clone

▸ **clone**(): [*Collection*](collection.collection-1.md)<K, V\>

Create a new collection based on this one

**Returns:** [*Collection*](collection.collection-1.md)<K, V\>

Defined in: [src/collection/index.ts:47](https://github.com/Discordoo/discordoo/blob/75592d0/src/collection/index.ts#L47)

___

### delete

▸ **delete**(`key`: K): *boolean*

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | K |

**Returns:** *boolean*

Inherited from: Map.delete

Defined in: node_modules/typescript/lib/lib.es2015.collection.d.ts:23

___

### entries

▸ **entries**(): *IterableIterator*<[K, V]\>

Returns an iterable of key, value pairs for every entry in the map.

**Returns:** *IterableIterator*<[K, V]\>

Inherited from: Map.entries

Defined in: node_modules/typescript/lib/lib.es2015.iterable.d.ts:126

___

### equal

▸ **equal**(`collection`: [*Collection*](collection.collection-1.md)<K, V\>): *boolean*

Check if two collections are equal

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `collection` | [*Collection*](collection.collection-1.md)<K, V\> | collection to compare to |

**Returns:** *boolean*

Defined in: [src/collection/index.ts:55](https://github.com/Discordoo/discordoo/blob/75592d0/src/collection/index.ts#L55)

___

### filter

▸ **filter**(`filter`: (`value`: V, `key`: K, `collection`: [*Collection*](collection.collection-1.md)<K, V\>) => *boolean*): [*Collection*](collection.collection-1.md)<K, V\>

Filter out the elements which don't meet requirements

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `filter` | (`value`: V, `key`: K, `collection`: [*Collection*](collection.collection-1.md)<K, V\>) => *boolean* | function which filters |

**Returns:** [*Collection*](collection.collection-1.md)<K, V\>

Defined in: [src/collection/index.ts:30](https://github.com/Discordoo/discordoo/blob/75592d0/src/collection/index.ts#L30)

___

### forEach

▸ **forEach**(`predicate`: (`value`: V, `key`: K, `collection`: [*Collection*](collection.collection-1.md)<K, V\>) => *void*): *void*

Execute a function on each of elements of map

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `predicate` | (`value`: V, `key`: K, `collection`: [*Collection*](collection.collection-1.md)<K, V\>) => *void* | function to use |

**Returns:** *void*

Overrides: Map.forEach

Defined in: [src/collection/index.ts:40](https://github.com/Discordoo/discordoo/blob/75592d0/src/collection/index.ts#L40)

___

### get

▸ **get**(`key`: K): *undefined* \| V

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | K |

**Returns:** *undefined* \| V

Inherited from: Map.get

Defined in: node_modules/typescript/lib/lib.es2015.collection.d.ts:25

___

### has

▸ **has**(`key`: K): *boolean*

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | K |

**Returns:** *boolean*

Inherited from: Map.has

Defined in: node_modules/typescript/lib/lib.es2015.collection.d.ts:26

___

### keys

▸ **keys**(): *IterableIterator*<K\>

Returns an iterable of keys in the map

**Returns:** *IterableIterator*<K\>

Inherited from: Map.keys

Defined in: node_modules/typescript/lib/lib.es2015.iterable.d.ts:131

___

### random

▸ **random**(`amount?`: *number*): V \| V[]

Get a random element from collection

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `amount?` | *number* | amount of elements to be retrieved |

**Returns:** V \| V[]

Defined in: [src/collection/index.ts:9](https://github.com/Discordoo/discordoo/blob/75592d0/src/collection/index.ts#L9)

___

### set

▸ **set**(`key`: K, `value`: V): [*Collection*](collection.collection-1.md)<K, V\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | K |
| `value` | V |

**Returns:** [*Collection*](collection.collection-1.md)<K, V\>

Inherited from: Map.set

Defined in: node_modules/typescript/lib/lib.es2015.collection.d.ts:27

___

### values

▸ **values**(): *IterableIterator*<V\>

Returns an iterable of values in the map

**Returns:** *IterableIterator*<V\>

Inherited from: Map.values

Defined in: node_modules/typescript/lib/lib.es2015.iterable.d.ts:136
