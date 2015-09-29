json.array!(@flights) do |flight|
  json.extract! flight, :id, :number, :scheduled
  json.url flight_url(flight, format: :json)
end
