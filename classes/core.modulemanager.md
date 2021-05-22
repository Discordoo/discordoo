[discordoo](../README.md) / [Modules](../modules.md) / [core](../modules/core.md) / ModuleManager

# Class: ModuleManager

[core](../modules/core.md).ModuleManager

Module manager for Client
Manages module loadment and their "injection"

## Table of contents

### Constructors

- [constructor](core.modulemanager.md#constructor)

### Properties

- [\_moduleLoadGroups](core.modulemanager.md#_moduleloadgroups)
- [client](core.modulemanager.md#client)
- [modules](core.modulemanager.md#modules)

### Methods

- [createLoadGroup](core.modulemanager.md#createloadgroup)
- [getModule](core.modulemanager.md#getmodule)
- [init](core.modulemanager.md#init)
- [use](core.modulemanager.md#use)

## Constructors

### constructor

\+ **new ModuleManager**(`client`: [*Client*](core.client.md)<[*DefaultClientStack*](../interfaces/core.defaultclientstack.md)\>): [*ModuleManager*](core.modulemanager.md)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `client` | [*Client*](core.client.md)<[*DefaultClientStack*](../interfaces/core.defaultclientstack.md)\> | client, into which modules will be loaded |

**Returns:** [*ModuleManager*](core.modulemanager.md)

Defined in: [src/core/modules/ModuleManager.ts:19](https://github.com/Discordoo/discordoo/blob/75592d0/src/core/modules/ModuleManager.ts#L19)

## Properties

### \_moduleLoadGroups

• `Private` **\_moduleLoadGroups**: [*Module*](../interfaces/core.module.md)[][]

Array of load groups

Defined in: [src/core/modules/ModuleManager.ts:16](https://github.com/Discordoo/discordoo/blob/75592d0/src/core/modules/ModuleManager.ts#L16)

___

### client

• **client**: [*Client*](core.client.md)<[*DefaultClientStack*](../interfaces/core.defaultclientstack.md)\>

Client which uses this manager

Defined in: [src/core/modules/ModuleManager.ts:19](https://github.com/Discordoo/discordoo/blob/75592d0/src/core/modules/ModuleManager.ts#L19)

___

### modules

• **modules**: [*Collection*](collection.collection-1.md)<string \| symbol, [*Module*](../interfaces/core.module.md)\>

Modules loaded by this manager

Defined in: [src/core/modules/ModuleManager.ts:13](https://github.com/Discordoo/discordoo/blob/75592d0/src/core/modules/ModuleManager.ts#L13)

## Methods

### createLoadGroup

▸ **createLoadGroup**(...`modules`: [*Module*](../interfaces/core.module.md)[]): *void*

Creates a new load group

Load group is a bunch of modules, which will be loaded together sequentially.
Groups can be either loaded in parallel or sequentially

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `...modules` | [*Module*](../interfaces/core.module.md)[] | modules to add to a new load group |

**Returns:** *void*

Defined in: [src/core/modules/ModuleManager.ts:36](https://github.com/Discordoo/discordoo/blob/75592d0/src/core/modules/ModuleManager.ts#L36)

___

### getModule

▸ **getModule**(`id`: *string* \| *symbol*): *undefined* \| [*Module*](../interfaces/core.module.md)

Retrieve a module

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | *string* \| *symbol* | module's id |

**Returns:** *undefined* \| [*Module*](../interfaces/core.module.md)

Defined in: [src/core/modules/ModuleManager.ts:80](https://github.com/Discordoo/discordoo/blob/75592d0/src/core/modules/ModuleManager.ts#L80)

___

### init

▸ **init**(`async?`: *boolean*): *Promise*<void\>

Initialize all modules

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `async` | *boolean* | false | determines if load groups shall be loaded in parallel |

**Returns:** *Promise*<void\>

Defined in: [src/core/modules/ModuleManager.ts:52](https://github.com/Discordoo/discordoo/blob/75592d0/src/core/modules/ModuleManager.ts#L52)

___

### use

▸ **use**(...`modules`: [*Module*](../interfaces/core.module.md)[]): *void*

An alias to ModuleManager#createLoadGroup

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `...modules` | [*Module*](../interfaces/core.module.md)[] | modules to add to a new load group |

**Returns:** *void*

Defined in: [src/core/modules/ModuleManager.ts:44](https://github.com/Discordoo/discordoo/blob/75592d0/src/core/modules/ModuleManager.ts#L44)
