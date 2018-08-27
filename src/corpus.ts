// THIS INTERFACE WAS AUTO GENERATED ON 2018-08-27
// DO NOT EDIT THIS FILE.
// IT WILL BE OVERWRITTEN ON EVERY CELERYSCRIPT UPGRADE.


export interface NamedPin {
  kind: "named_pin";
  args: {
    pin_type: string;
    pin_id: number;
  };
  comment?: string | undefined;
  body?: undefined;
}


export interface Nothing {
  kind: "nothing";
  args: {
  };
  comment?: string | undefined;
  body?: undefined;
}


export interface Tool {
  kind: "tool";
  args: {
    tool_id: number;
  };
  comment?: string | undefined;
  body?: undefined;
}


export interface Coordinate {
  kind: "coordinate";
  args: {
    x: number;
    y: number;
    z: number;
  };
  comment?: string | undefined;
  body?: undefined;
}


export interface MoveAbsolute {
  kind: "move_absolute";
  args: {
    location: Coordinate
    | Identifier
    | Point
    | Tool;
    speed: number;
    offset: Coordinate;
  };
  comment?: string | undefined;
  body?: undefined;
}


export interface MoveRelative {
  kind: "move_relative";
  args: {
    x: number;
    y: number;
    z: number;
    speed: number;
  };
  comment?: string | undefined;
  body?: undefined;
}


export interface WritePin {
  kind: "write_pin";
  args: {
    pin_number: NamedPin
    | number;
    pin_value: number;
    pin_mode: number;
  };
  comment?: string | undefined;
  body?: undefined;
}


export interface ReadPin {
  kind: "read_pin";
  args: {
    pin_number: NamedPin
    | number;
    label: string;
    pin_mode: number;
  };
  comment?: string | undefined;
  body?: undefined;
}


export interface Channel {
  kind: "channel";
  args: {
    channel_name: string;
  };
  comment?: string | undefined;
  body?: undefined;
}


export interface Wait {
  kind: "wait";
  args: {
    milliseconds: number;
  };
  comment?: string | undefined;
  body?: undefined;
}

export type SendMessageBodyItem = Channel;
export interface SendMessage {
  kind: "send_message";
  args: {
    message: string;
    message_type: string;
  };
  comment?: string | undefined;
  body?: SendMessageBodyItem[] | undefined;
}

export type ExecuteBodyItem = VariableDeclaration;
export interface Execute {
  kind: "execute";
  args: {
    sequence_id: number;
  };
  comment?: string | undefined;
  body?: ExecuteBodyItem[] | undefined;
}

export type IfBodyItem = Pair;
export interface If {
  kind: "_if";
  args: {
    lhs: NamedPin
    | string;
    op: string;
    rhs: number;
    _then: Execute
    | Nothing;
    _else: Execute
    | Nothing;
  };
  comment?: string | undefined;
  body?: IfBodyItem[] | undefined;
}

export type SequenceBodyItem = If
  | Execute
  | ExecuteScript
  | FindHome
  | MoveAbsolute
  | MoveRelative
  | ReadPin
  | SendMessage
  | TakePhoto
  | Wait
  | WritePin
  | Transaction;
export interface Sequence {
  kind: "sequence";
  args: {
    version: number;
    locals: ScopeDeclaration;
  };
  comment?: string | undefined;
  body?: SequenceBodyItem[] | undefined;
}


export interface Home {
  kind: "home";
  args: {
    speed: number;
    axis: string;
  };
  comment?: string | undefined;
  body?: undefined;
}


export interface FindHome {
  kind: "find_home";
  args: {
    speed: number;
    axis: string;
  };
  comment?: string | undefined;
  body?: undefined;
}


export interface Zero {
  kind: "zero";
  args: {
    axis: string;
  };
  comment?: string | undefined;
  body?: undefined;
}


export interface EmergencyLock {
  kind: "emergency_lock";
  args: {
  };
  comment?: string | undefined;
  body?: undefined;
}


export interface EmergencyUnlock {
  kind: "emergency_unlock";
  args: {
  };
  comment?: string | undefined;
  body?: undefined;
}


export interface ReadStatus {
  kind: "read_status";
  args: {
  };
  comment?: string | undefined;
  body?: undefined;
}


export interface Sync {
  kind: "sync";
  args: {
  };
  comment?: string | undefined;
  body?: undefined;
}


export interface CheckUpdates {
  kind: "check_updates";
  args: {
    package: string;
  };
  comment?: string | undefined;
  body?: undefined;
}


export interface PowerOff {
  kind: "power_off";
  args: {
  };
  comment?: string | undefined;
  body?: undefined;
}


export interface Reboot {
  kind: "reboot";
  args: {
    package: string;
  };
  comment?: string | undefined;
  body?: undefined;
}


export interface TogglePin {
  kind: "toggle_pin";
  args: {
    pin_number: NamedPin
    | number;
  };
  comment?: string | undefined;
  body?: undefined;
}


export interface Explanation {
  kind: "explanation";
  args: {
    message: string;
  };
  comment?: string | undefined;
  body?: undefined;
}

export type RpcRequestBodyItem = Home
  | EmergencyLock
  | EmergencyUnlock
  | ReadStatus
  | Sync
  | CheckUpdates
  | PowerOff
  | Reboot
  | TogglePin
  | ConfigUpdate
  | Calibrate
  | Execute
  | MoveAbsolute
  | MoveRelative
  | WritePin
  | ReadPin
  | SendMessage
  | FactoryReset
  | ExecuteScript
  | SetUserEnv
  | Wait
  | InstallFarmware
  | UpdateFarmware
  | TakePhoto
  | Zero
  | InstallFirstPartyFarmware
  | RemoveFarmware
  | FindHome
  | RegisterGpio
  | UnregisterGpio
  | SetServoAngle
  | ChangeOwnership
  | DumpInfo;
export interface RpcRequest {
  kind: "rpc_request";
  args: {
    label: string;
  };
  comment?: string | undefined;
  body?: RpcRequestBodyItem[] | undefined;
}


export interface RpcOk {
  kind: "rpc_ok";
  args: {
    label: string;
  };
  comment?: string | undefined;
  body?: undefined;
}

export type RpcErrorBodyItem = Explanation;
export interface RpcError {
  kind: "rpc_error";
  args: {
    label: string;
  };
  comment?: string | undefined;
  body?: RpcErrorBodyItem[] | undefined;
}


export interface Calibrate {
  kind: "calibrate";
  args: {
    axis: string;
  };
  comment?: string | undefined;
  body?: undefined;
}


export interface Pair {
  kind: "pair";
  args: {
    label: string;
    value: Boolean
    | number
    | string;
  };
  comment?: string | undefined;
  body?: undefined;
}


export interface RegisterGpio {
  kind: "register_gpio";
  args: {
    pin_number: NamedPin
    | number;
    sequence_id: number;
  };
  comment?: string | undefined;
  body?: undefined;
}


export interface UnregisterGpio {
  kind: "unregister_gpio";
  args: {
    pin_number: NamedPin
    | number;
  };
  comment?: string | undefined;
  body?: undefined;
}

export type ConfigUpdateBodyItem = Pair;
export interface ConfigUpdate {
  kind: "config_update";
  args: {
    package: string;
  };
  comment?: string | undefined;
  body?: ConfigUpdateBodyItem[] | undefined;
}


export interface FactoryReset {
  kind: "factory_reset";
  args: {
    package: string;
  };
  comment?: string | undefined;
  body?: undefined;
}

export type ExecuteScriptBodyItem = Pair;
export interface ExecuteScript {
  kind: "execute_script";
  args: {
    label: string;
  };
  comment?: string | undefined;
  body?: ExecuteScriptBodyItem[] | undefined;
}

export type SetUserEnvBodyItem = Pair;
export interface SetUserEnv {
  kind: "set_user_env";
  args: {
  };
  comment?: string | undefined;
  body?: SetUserEnvBodyItem[] | undefined;
}


export interface TakePhoto {
  kind: "take_photo";
  args: {
  };
  comment?: string | undefined;
  body?: undefined;
}


export interface Point {
  kind: "point";
  args: {
    pointer_type: string;
    pointer_id: number;
  };
  comment?: string | undefined;
  body?: undefined;
}


export interface InstallFarmware {
  kind: "install_farmware";
  args: {
    url: string;
  };
  comment?: string | undefined;
  body?: undefined;
}


export interface UpdateFarmware {
  kind: "update_farmware";
  args: {
    package: string;
  };
  comment?: string | undefined;
  body?: undefined;
}


export interface RemoveFarmware {
  kind: "remove_farmware";
  args: {
    package: string;
  };
  comment?: string | undefined;
  body?: undefined;
}

export type ScopeDeclarationBodyItem = ParameterDeclaration
  | VariableDeclaration;
export interface ScopeDeclaration {
  kind: "scope_declaration";
  args: {
  };
  comment?: string | undefined;
  body?: ScopeDeclarationBodyItem[] | undefined;
}


export interface Identifier {
  kind: "identifier";
  args: {
    label: string;
  };
  comment?: string | undefined;
  body?: undefined;
}


export interface VariableDeclaration {
  kind: "variable_declaration";
  args: {
    label: string;
    data_value: Coordinate
    | Identifier
    | Point
    | Tool;
  };
  comment?: string | undefined;
  body?: undefined;
}


export interface ParameterDeclaration {
  kind: "parameter_declaration";
  args: {
    label: string;
    data_type: string;
  };
  comment?: string | undefined;
  body?: undefined;
}


export interface SetServoAngle {
  kind: "set_servo_angle";
  args: {
    pin_number: NamedPin
    | number;
    pin_value: number;
  };
  comment?: string | undefined;
  body?: undefined;
}

export type ChangeOwnershipBodyItem = Pair;
export interface ChangeOwnership {
  kind: "change_ownership";
  args: {
  };
  comment?: string | undefined;
  body?: ChangeOwnershipBodyItem[] | undefined;
}


export interface DumpInfo {
  kind: "dump_info";
  args: {
  };
  comment?: string | undefined;
  body?: undefined;
}

export type ResourceUpdateBodyItem = Pair;
export interface ResourceUpdate {
  kind: "resource_update";
  args: {
    resource_type: string;
    resource_id: number;
  };
  comment?: string | undefined;
  body?: ResourceUpdateBodyItem[] | undefined;
}


export interface ResourceDeletion {
  kind: "resource_deletion";
  args: {
    resource_type: string;
    resource_id: number;
  };
  comment?: string | undefined;
  body?: undefined;
}

export type TransactionBodyItem = ResourceUpdate
  | ResourceDeletion;
export interface Transaction {
  kind: "transaction";
  args: {
    label: string;
  };
  comment?: string | undefined;
  body?: TransactionBodyItem[] | undefined;
}


export interface InstallFirstPartyFarmware {
  kind: "install_first_party_farmware";
  args: {
  };
  comment?: string | undefined;
  body?: undefined;
}

export type CeleryNode = NamedPin
  | Nothing
  | Tool
  | Coordinate
  | MoveAbsolute
  | MoveRelative
  | WritePin
  | ReadPin
  | Channel
  | Wait
  | SendMessage
  | Execute
  | If
  | Sequence
  | Home
  | FindHome
  | Zero
  | EmergencyLock
  | EmergencyUnlock
  | ReadStatus
  | Sync
  | CheckUpdates
  | PowerOff
  | Reboot
  | TogglePin
  | Explanation
  | RpcRequest
  | RpcOk
  | RpcError
  | Calibrate
  | Pair
  | RegisterGpio
  | UnregisterGpio
  | ConfigUpdate
  | FactoryReset
  | ExecuteScript
  | SetUserEnv
  | TakePhoto
  | Point
  | InstallFarmware
  | UpdateFarmware
  | RemoveFarmware
  | ScopeDeclaration
  | Identifier
  | VariableDeclaration
  | ParameterDeclaration
  | SetServoAngle
  | ChangeOwnership
  | DumpInfo
  | ResourceUpdate
  | ResourceDeletion
  | Transaction
  | InstallFirstPartyFarmware;
export const LATEST_VERSION = 20180209;
export const DIGITAL = 0;
export const ANALOG = 1;
export type ALLOWED_PIN_MODES = 0
  | 1;
export type ALLOWED_MESSAGE_TYPES = "success"
  | "busy"
  | "warn"
  | "error"
  | "info"
  | "fun"
  | "debug";
export type ALLOWED_CHANNEL_NAMES = "ticker"
  | "toast"
  | "email"
  | "espeak";
export type ALLOWED_DATA_TYPES = "tool"
  | "coordinate"
  | "point";
export type ALLOWED_OPS = "<"
  | ">"
  | "is"
  | "not"
  | "is_undefined";
export type ALLOWED_PACKAGES = "farmbot_os"
  | "arduino_firmware";
export type ALLOWED_AXIS = "x"
  | "y"
  | "z"
  | "all";
export type Color = "blue"
  | "green"
  | "yellow"
  | "orange"
  | "purple"
  | "pink"
  | "gray"
  | "red";
export type LegalArgString = "_else"
  | "_then"
  | "axis"
  | "channel_name"
  | "data_type"
  | "data_value"
  | "label"
  | "lhs"
  | "locals"
  | "location"
  | "message"
  | "message_type"
  | "milliseconds"
  | "offset"
  | "op"
  | "package"
  | "pin_id"
  | "pin_mode"
  | "pin_number"
  | "pin_type"
  | "pin_value"
  | "pointer_id"
  | "pointer_type"
  | "radius"
  | "resource_id"
  | "resource_type"
  | "rhs"
  | "sequence_id"
  | "speed"
  | "tool_id"
  | "url"
  | "value"
  | "version"
  | "x"
  | "y"
  | "z";
export type LegalKindString = "_if"
  | "calibrate"
  | "change_ownership"
  | "channel"
  | "check_updates"
  | "config_update"
  | "coordinate"
  | "dump_info"
  | "emergency_lock"
  | "emergency_unlock"
  | "execute"
  | "execute_script"
  | "explanation"
  | "factory_reset"
  | "find_home"
  | "home"
  | "identifier"
  | "install_farmware"
  | "install_first_party_farmware"
  | "move_absolute"
  | "move_relative"
  | "named_pin"
  | "nothing"
  | "pair"
  | "parameter_declaration"
  | "point"
  | "power_off"
  | "read_pin"
  | "read_status"
  | "reboot"
  | "register_gpio"
  | "remove_farmware"
  | "resource_deletion"
  | "resource_update"
  | "rpc_error"
  | "rpc_ok"
  | "rpc_request"
  | "scope_declaration"
  | "send_message"
  | "sequence"
  | "set_servo_angle"
  | "set_user_env"
  | "sync"
  | "take_photo"
  | "toggle_pin"
  | "tool"
  | "transaction"
  | "unregister_gpio"
  | "update_farmware"
  | "variable_declaration"
  | "wait"
  | "write_pin"
  | "zero";
export type LegalSequenceKind = "_if"
  | "execute"
  | "execute_script"
  | "find_home"
  | "move_absolute"
  | "move_relative"
  | "read_pin"
  | "send_message"
  | "take_photo"
  | "transaction"
  | "wait"
  | "write_pin";
export type DataChangeType = "add"
  | "remove"
  | "update";
export type PointType = "GenericPointer"
  | "ToolSlot"
  | "Plant";
export type AllowedPinTypes = "Peripheral"
  | "Sensor"
  | "BoxLed3"
  | "BoxLed4";
export type PlantStage = "planned"
  | "planted"
  | "harvested";
