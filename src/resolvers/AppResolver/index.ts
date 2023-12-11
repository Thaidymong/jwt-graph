import { GraphQLUpload } from "graphql-upload-minimal";
import { CreateTestMutation } from "../test/Mutation/CreateTestMutation";
import { UpdateTestMutation } from "../test/Mutation/UpdateTestMutation";
import { TestDetailQuery } from "../test/Query/TestDetailQuery";
import { TestListQuery } from "../test/Query/TestListQuery";
import { AppCreateUserMutation } from "../App/Mutation/AppCreateUserMutation";
const AppResolver = [
  {
    Query: {
      testDetail: TestDetailQuery,
      testList: TestListQuery,
    },
    Upload: GraphQLUpload,
    Mutation: {
      createTest: CreateTestMutation,
      updateTest: UpdateTestMutation,
      appCreateUser: AppCreateUserMutation,
    },
  },
];

export default AppResolver;
