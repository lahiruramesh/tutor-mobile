class Course {
  static STATUS_ACTIVE = 1;
  static STATUS_INACTIVE = 0;

  static schema = {
    name: 'Course',
    properties: {
      _id: 'string',
      _partition: 'string',
      createdAt: 'date',
      createdBy: 'string',
      modules: 'arrayOfObjects',
      status: 'int',
    },
    primaryKey: '_id',
  };
}
export {Course};
