// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  TypedMap,
  Entity,
  Value,
  ValueKind,
  store,
  Bytes,
  BigInt,
  BigDecimal
} from "@graphprotocol/graph-ts";

export class Lien extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save Lien entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type Lien must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("Lien", id.toString(), this);
    }
  }

  static loadInBlock(id: string): Lien | null {
    return changetype<Lien | null>(store.get_in_block("Lien", id));
  }

  static load(id: string): Lien | null {
    return changetype<Lien | null>(store.get("Lien", id));
  }

  get id(): string {
    let value = this.get("id");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toString();
    }
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get collection(): Bytes {
    let value = this.get("collection");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBytes();
    }
  }

  set collection(value: Bytes) {
    this.set("collection", Value.fromBytes(value));
  }

  get tokenId(): BigInt {
    let value = this.get("tokenId");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBigInt();
    }
  }

  set tokenId(value: BigInt) {
    this.set("tokenId", Value.fromBigInt(value));
  }

  get borrower(): Bytes {
    let value = this.get("borrower");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBytes();
    }
  }

  set borrower(value: Bytes) {
    this.set("borrower", Value.fromBytes(value));
  }

  get timeStarted(): BigInt {
    let value = this.get("timeStarted");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBigInt();
    }
  }

  set timeStarted(value: BigInt) {
    this.set("timeStarted", Value.fromBigInt(value));
  }

  get auctionDuration(): BigInt | null {
    let value = this.get("auctionDuration");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBigInt();
    }
  }

  set auctionDuration(value: BigInt | null) {
    if (!value) {
      this.unset("auctionDuration");
    } else {
      this.set("auctionDuration", Value.fromBigInt(<BigInt>value));
    }
  }

  get auctionStarted(): BigInt | null {
    let value = this.get("auctionStarted");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBigInt();
    }
  }

  set auctionStarted(value: BigInt | null) {
    if (!value) {
      this.unset("auctionStarted");
    } else {
      this.set("auctionStarted", Value.fromBigInt(<BigInt>value));
    }
  }

  get repayTime(): BigInt | null {
    let value = this.get("repayTime");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBigInt();
    }
  }

  set repayTime(value: BigInt | null) {
    if (!value) {
      this.unset("repayTime");
    } else {
      this.set("repayTime", Value.fromBigInt(<BigInt>value));
    }
  }

  get seizeTime(): BigInt | null {
    let value = this.get("seizeTime");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBigInt();
    }
  }

  set seizeTime(value: BigInt | null) {
    if (!value) {
      this.unset("seizeTime");
    } else {
      this.set("seizeTime", Value.fromBigInt(<BigInt>value));
    }
  }

  get loans(): Array<string> {
    let value = this.get("loans");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toStringArray();
    }
  }

  set loans(value: Array<string>) {
    this.set("loans", Value.fromStringArray(value));
  }
}

export class Loan extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save Loan entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type Loan must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("Loan", id.toString(), this);
    }
  }

  static loadInBlock(id: string): Loan | null {
    return changetype<Loan | null>(store.get_in_block("Loan", id));
  }

  static load(id: string): Loan | null {
    return changetype<Loan | null>(store.get("Loan", id));
  }

  get id(): string {
    let value = this.get("id");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toString();
    }
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get lienId(): string | null {
    let value = this.get("lienId");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set lienId(value: string | null) {
    if (!value) {
      this.unset("lienId");
    } else {
      this.set("lienId", Value.fromString(<string>value));
    }
  }

  get lender(): Bytes {
    let value = this.get("lender");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBytes();
    }
  }

  set lender(value: Bytes) {
    this.set("lender", Value.fromBytes(value));
  }

  get loanAmount(): BigInt {
    let value = this.get("loanAmount");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBigInt();
    }
  }

  set loanAmount(value: BigInt) {
    this.set("loanAmount", Value.fromBigInt(value));
  }

  get rate(): BigInt {
    let value = this.get("rate");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBigInt();
    }
  }

  set rate(value: BigInt) {
    this.set("rate", Value.fromBigInt(value));
  }

  get startTime(): BigInt {
    let value = this.get("startTime");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBigInt();
    }
  }

  set startTime(value: BigInt) {
    this.set("startTime", Value.fromBigInt(value));
  }

  get endTime(): BigInt | null {
    let value = this.get("endTime");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBigInt();
    }
  }

  set endTime(value: BigInt | null) {
    if (!value) {
      this.unset("endTime");
    } else {
      this.set("endTime", Value.fromBigInt(<BigInt>value));
    }
  }

  get lien(): string {
    let value = this.get("lien");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toString();
    }
  }

  set lien(value: string) {
    this.set("lien", Value.fromString(value));
  }
}
