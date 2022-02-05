package common

func FallbackString(value, fallback string) string {

	if len(value) == 0 {

		return fallback
	}

	return value
}
