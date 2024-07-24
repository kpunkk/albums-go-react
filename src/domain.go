package main

type Album struct {
	ID     int64   `json:"id,omitempty"`
	Title  string  `json:"title"`
	Artist string  `json:"artist"`
	Price  float32 `json:"price"`
}
