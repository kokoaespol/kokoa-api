import Member from "../../domain/members/Member";
import MemberRepository from "../../domain/members/MemberRepository";
import UUID from "../../domain/UUID";

export default class InMemoryMemberRepository implements MemberRepository {
  private static members: Member[] = [
    Member.create(UUID.create(), "Alexander", "Goussas", "President", {
      github: "https://github.com/aloussase",
    }),
    Member.create(UUID.create(), "Alina", "Carpio", "Secretaria"),
    Member.create(UUID.create(), "Joangie", "Marquez", "Vice-president"),
  ];

  constructor() {}

  async getById(id: UUID): Promise<Member | null> {
    const member = InMemoryMemberRepository.members.find((member) =>
      member.id.equals(id)
    );
    if (member === undefined) return null;
    return member;
  }
}
