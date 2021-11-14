import { Injectable } from "@nestjs/common";
import { CreateDonationInput } from "./dto/create-donation.input";

@Injectable()
export class DonationsService {
  create(createDonationInput: CreateDonationInput) {
    console.log({ createDonationInput });
    return "This action adds a new donation";
  }

  findAll() {
    return [{ exampleField: 1 }, { exampleField: 2 }];
  }

  findOne(id: number) {
    return `This action returns a #${id} donation`;
  }
}
