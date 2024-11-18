# Makefile for managing tasks

# Define the name of the test command
TEST_CMD = npm test

# Default target when no argument is provided
.PHONY: all
all: test

# Run tests
.PHONY: test
test:
	@echo "Running tests..."
	$(TEST_CMD)

# Lint JavaScript files
.PHONY: lint
lint:
	@echo "Linting JavaScript files..."
	# Add linting command if you're using ESLint, for example:
	# npx eslint .

# Build the project (if necessary)
.PHONY: build
build:
	@echo "Building the project..."
	# Add your build steps here (e.g., bundling JavaScript or compiling Sass)

# Clean up build files (if applicable)
.PHONY: clean
clean:
	@echo "Cleaning up build files..."
	# Add your cleanup steps here (e.g., removing dist folder)
