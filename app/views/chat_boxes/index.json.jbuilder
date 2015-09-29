json.array!(@chat_boxes) do |chat_box|
  json.extract! chat_box, :id, :open_time, :close_time, :flight_id
  json.url chat_box_url(chat_box, format: :json)
end
