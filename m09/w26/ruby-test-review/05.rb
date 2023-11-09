=begin

CHALLENGE 5

Given the existing Employee class.

Define a class School (at the bottom of this file) which has a method `train`.
This train method should take in an employee as an argument, and upskill them.

=end

class Employee
  attr_reader :skill_level
  
  def initialize
    @skill_level = 1
  end

  def upskill
    @skill_level += 1
  end
end
