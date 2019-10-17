class Vacancy < ApplicationRecord
  belongs_to :user

  def as_json(options = nil)
    super({
      only: [],
      methods: %i[id title text user]
    }.deep_merge(options || {}))
  end
end
